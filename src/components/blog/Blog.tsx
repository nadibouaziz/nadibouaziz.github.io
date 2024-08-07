import Image from "next/image";

const Blog = () => {
  return (
    <section>
      <Image
        alt="Work in Progress"
        width={748}
        height={751}
        src="/img/work-in-progress.png"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};
export default Blog;
