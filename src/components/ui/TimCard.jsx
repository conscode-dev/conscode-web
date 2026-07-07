const TeamCard = ({ photo, name, role }) => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[20rem]
        h-[22rem]
        sm:h-[24rem]
        lg:h-[25rem]
        overflow-hidden
        rounded-[1.6rem]
        border border-[#E7EDF5]
        shadow-[0_18px_42px_rgba(56,67,89,0.1)]
        group
      "
    >
      {/* Image */}
      <img
        src={photo}
        alt={name}
        loading="lazy"
        decoding="async"
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#080B10]/76 via-[#080B10]/18 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <h3 className="text-lg lg:text-xl font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
