import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <Link target="_blank" href="https://www.linkedin.com/in/nadibouaziz/" rel="noopener noreferrer">
        <i className="bx bxl-linkedin"></i>
      </Link>
      <Link target="_blank" href="https://github.com/nadibouaziz" rel="noopener noreferrer">
        <i className="bx bxl-github"></i>
      </Link>
    </div>
  );
};

export default SocialMedia;
