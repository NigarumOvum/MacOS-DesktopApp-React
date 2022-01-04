import { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Brealy P, now an incoming Computer Science master's
              student at UNED and a Full-Stack Developer.
            </div>
            <div className="mt-1">
              I consider myself as a passionate computer science student, always
              curious and excited about the new technology trends with a
              relentless attention to details. With strong bias for action and
              ability to operate independently, communication and organization
              skills with an ability to thrive in a fast-paced production
              deadline-driven environment.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Full-Stack Development / DevOps / Machine Learning / Ciber Security /Data Science"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm open to new projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:bfr131095@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                bfr131095@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="mailto:bfr131095@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                bfr131095@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/nigarumovum"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/nigarumovum
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/bfpr131095/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/bfpr131095/
              </a>
            </li>
            {/* <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://zxh.io"
                target="_blank"
                rel="noreferrer"
              >
                https://zxh.io
              </a>
            </li> */}
            {/* <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                https://www.zhihu.com/people/chao-neng-gui-su
              </a>
            </li> */}
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
