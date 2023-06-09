import fs from "fs/promises";
import path from "path";
import slugify from "slugify";

const blogDirectory = path.join(process.cwd(), "blogs");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { starterYaml, blogContent } = req.body;

    try {
      const titleSlug = slugify(starterYaml.title, { lower: true });
      await fs.writeFile(`${blogDirectory}/${titleSlug}.md`, blogContent);
      console.log("file saved successsfully...");
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  }
};

export default handler;
