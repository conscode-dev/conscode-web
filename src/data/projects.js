const imageModules = import.meta.glob("../assets/Projects/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
  query: "?url",
});

const textModules = import.meta.glob("../assets/Projects/**/*.txt", {
  eager: true,
  import: "default",
  query: "?raw",
});

const projectFolders = [
  "Sistem Informasi Pelayanan Surat Desa",
  "Chemescape Room Educational Game",
  "Corporate Company Profile Website",
  "E-Cerkak Digital Literature Blog",
  "Employee Attendance Management System",
  "Fantasy Story Learning Platform",
];

const projectContent = {
  "Sistem Informasi Pelayanan Surat Desa": {
    description:
      "Aplikasi pelayanan surat desa berbasis web yang membantu penduduk mengajukan surat secara online, lalu diproses oleh staff desa dan disahkan oleh lurah sebelum dokumen dapat diunduh dalam format PDF.",
    technologies: ["CodeIgniter 4", "MySQL", "PDF Export"],
    features: [
      "Pengajuan surat online",
      "Verifikasi staff desa",
      "Pengesahan lurah",
      "Unduh dokumen PDF",
      "Manajemen data penduduk",
    ],
  },
  "Chemescape Room Educational Game": {
    description:
      "Game edukasi kimia berbasis web dengan konsep virtual escape room. Siswa harus menyelesaikan pretest, memecahkan puzzle kimia, menemukan kode kunci, lalu menyelesaikan posttest untuk mengukur pemahaman akhir.",
    features: [
      "Gerbang pretest",
      "Puzzle room kimia",
      "Validasi kode kunci",
      "Evaluasi posttest",
      "Dashboard guru dan analytics",
    ],
  },
  "Corporate Company Profile Website": {
    title: "Corporate Company Profile Website",
    description:
      "Website profil perusahaan berskala enterprise yang berfungsi sebagai pusat reputasi digital dan generator prospek bisnis. Halaman dirancang dengan narasi kuat, visual modern, performa cepat, struktur SEO, dan keamanan berlapis.",
    features: [
      "Corporate hero dan value proposition",
      "Modul solusi dan layanan",
      "Portfolio dan testimonial",
      "Governance center",
      "Career center",
    ],
  },
  "E-Cerkak Digital Literature Blog": {
    description:
      "Blog literasi digital untuk publikasi, pelestarian, dan pembelajaran Cerkak atau Cerita Cekak. Platform ini mengubah karya sastra daerah menjadi pengalaman baca digital yang interaktif dan mudah diakses generasi muda.",
    features: [
      "Kategori Cerkak",
      "E-reader dan audio literasi",
      "Komentar dan apresiasi komunitas",
      "Kamus dan glosarium bahasa",
      "Dashboard admin dan analisis pembaca",
    ],
  },
  "Employee Attendance Management System": {
    description:
      "Sistem manajemen absensi karyawan berbasis web/mobile untuk menggantikan proses manual dengan pencatatan yang otomatis, transparan, akurat, dan lebih sulit dimanipulasi.",
    features: [
      "Dashboard analitik absensi",
      "Manajemen karyawan dan divisi",
      "Laporan PDF dan Excel",
      "Role dan permission bertingkat",
      "Monitoring absensi real-time dan geolocation",
    ],
  },
  "Fantasy Story Learning Platform": {
    description:
      "Platform pembelajaran berbasis web yang mengubah materi edukasi menjadi seri komik fantasi interaktif. Siswa dapat membaca materi, membuat cerita, mengikuti evaluasi, dan melihat progres melalui sistem ranking.",
    features: [
      "World map dashboard",
      "Materi web comic interaktif",
      "Creative space untuk menulis cerita",
      "Kuis RPG pilihan ganda",
      "Fantasy dictionary",
      "Dashboard admin dan ranking real-time",
    ],
  },
};

export const aiProjects = [
  {
    title: "AI Chatbot Customer Service",
    description:
      "Chatbot berbasis knowledge base untuk membantu respons customer secara otomatis.",
    status: "Sedang dikerjakan",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automasi pesan, lead qualification, dan follow-up customer melalui WhatsApp.",
    status: "Sedang dikerjakan",
  },
  {
    title: "Document Q&A Assistant",
    description:
      "AI assistant untuk membaca dokumen dan menjawab pertanyaan berdasarkan data internal.",
    status: "Proof of Concept",
  },
];

const getFileName = (path) => path.split("/").pop()?.toLowerCase() || "";

const parseProjectText = (text = "") => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const findIndex = (label) =>
    lines.findIndex((line) => line.toLowerCase() === label.toLowerCase());

  const aboutIndex = findIndex("About The Project");
  const techIndex = findIndex("Technologies");
  const featureIndex = findIndex("Key Features");

  const title =
    aboutIndex > 0 && lines[0].toLowerCase() !== "about the project"
      ? lines[0]
      : null;

  const technologies =
    techIndex >= 0
      ? lines.slice(techIndex + 1, featureIndex > techIndex ? featureIndex : lines.length)
      : [];

  const features = featureIndex >= 0 ? lines.slice(featureIndex + 1) : [];

  return { title, technologies, features };
};

const formatTitle = (folderName) => folderName.replace(/\s+/g, " ").trim();

export const slugifyProject = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const webProjects = projectFolders.map((folderName) => {
  const localContent = projectContent[folderName] || {};
  const folderPath = `../assets/Projects/${folderName}/`;
  const textEntry = Object.entries(textModules).find(([path]) =>
    path.startsWith(folderPath)
  );
  const parsedText = parseProjectText(textEntry?.[1]);

  const images = Object.entries(imageModules)
    .filter(([path]) => path.startsWith(folderPath))
    .sort(([a], [b]) => a.localeCompare(b));

  const thumbnailEntry =
    images.find(([path]) => {
      const fileName = getFileName(path);
      return fileName.includes("thumbnail") || fileName.includes("thumnail");
    }) || images[0];

  const gallery = images
    .filter(([path]) => path !== thumbnailEntry?.[0])
    .map(([, src]) => src);

  const title = localContent.title || parsedText.title || formatTitle(folderName);

  return {
    slug: slugifyProject(title),
    title,
    image: thumbnailEntry?.[1],
    description: localContent.description,
    technologies: localContent.technologies || parsedText.technologies,
    features: localContent.features || parsedText.features,
    gallery: gallery.length > 0 ? gallery : thumbnailEntry ? [thumbnailEntry[1]] : [],
  };
});
