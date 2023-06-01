import { useState, useRef } from "react";
import { useRouter } from "next/router";
import * as classes from "./TextEditor.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Button from "@/elements/Button";
import { Parser } from "html-to-react";
import yaml from "js-yaml";

import CrossButton from "@/elements/CrossButton";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link"],
  ],
};

const TextEditor = () => {
  const editorRef = useRef(null);
  const [blogContent, setBlogContent] = useState();
  const [starterYaml, setStarterYaml] = useState({
    title: "",
    date: "",
    image: "car1.jpg",
    author: "Tejas",
    excerpt: "this is something i don't expect to have.",
    tags: [],
  });
  const router = useRouter();

  const onInitialPostHandler = event => {
    const { name, value } = event.target;
    setStarterYaml(pre => {
      return { ...pre, [name]: value };
    });
  };

  const submitHandler = async event => {
    event.preventDefault();
    // try {
    //     const res = await fetch('/api/save-post', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ starterYaml, blogContent })
    //     })
    //     console.log(res);

    // } catch (err) {
    //     console.log(err);
    // }
  };

  const convertHTMLToJson = htmlContent => {
    const parser = new Parser();
    const json = parser.parse(htmlContent);
    return json;
  };

  const onChangeHandler = (content, delta, source, editor) => {
    const htmlContent = editor.getHTML();
    const jsonContent = convertHTMLToJson(htmlContent);
    const yamlContent = yaml.dump(jsonContent);
    console.log(yamlContent);

    // const blogContentHtml = editor.getHTML();
    // const blogContentYaml =
    // setBlogContent(blogContentYaml);
  };

  return (
    <section className="relative">
      <div className="mx-auto min-h-[600px] max-w-[70rem] py-20">
        <CrossButton
          className="!absolute !right-5 !top-5"
          onClick={() => router.replace("/")}
        />
        <div className="flex  items-center justify-end">
          <Button type="ghost" className="mr-5  w-auto px-5 py-3">
            Add Cover Image
          </Button>
          <Button type="fill" className="w-auto px-9">
            Preview
          </Button>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              className="mt-10 inline-block w-full border-b border-white-100 bg-transparent px-5 py-8 font-primary text-5xl placeholder:text-white-100 focus:outline-0 "
              placeholder="Enter your Post Title here..."
              onClick={onInitialPostHandler}
              name="title"
            />
          </div>
          <QuillNoSSRWrapper
            className={`${classes.quillWrapper} text-[1.7rem]`}
            ref={editorRef}
            modules={modules}
            onChange={onChangeHandler}
            theme="snow"
            placeholder="Write your content here..."
          />
          <Button type="fill" className="absolute -bottom-5 w-auto px-10 ">
            Publish
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TextEditor;
