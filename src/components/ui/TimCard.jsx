const TeamCard = ({ photo, name, role }) => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[20rem]
        h-[24rem]
        sm:h-[26rem]
        lg:h-[28rem]
        overflow-hidden
        rounded-2xl
        border border-[#33423c]
        shadow-sm
        group
      "
    >
      {/* Image */}
      <img
        src={photo}
        alt={name}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1f]/80 via-[#1f2a1f]/25 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <h3 className="text-lg lg:text-xl font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
