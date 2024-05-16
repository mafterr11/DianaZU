import React from "react";

function Header({
  title,
  description = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="mb-10 text-center text-2xl font-semibold md:text-[55px]">
        {title}
      </p>
      <p className="text-center text-[21px]">{description}</p>
    </div>
  );
}

export default Header;
