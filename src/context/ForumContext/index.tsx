import { createContext, useState, useEffect, useContext } from "react";
import { instance, instanceHeaders } from "../../service/api";
import { UserContext } from "../UserContext";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface iPost {
  userId: number;
  content: string;
  author: any;
  name: string;
  image: string;
  occupation: string;
  id: number;
}

interface IDashboardContext {
  post: iPost[];
  newPost: (data: iPost) => void;
  handleDelete: (postidCard: number) => Promise<void>;
  setPost: any;
  getPosts: any;
}

export const ForumContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardForum = ({ children }: iDefaultContextProps) => {
  const [post, setPost] = useState([] as iPost[]);
  const [state, setState] = useState(false);
  const { profile } = useContext(UserContext);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const posts = await instanceHeaders.get("/post");

      setPost([...posts.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (postidCard: number): Promise<void> => {
    const token = localStorage.getItem("@dev-path:token");
    instance.defaults.headers.authorization = `Bearer ${token}`;

    await instanceHeaders.delete(`/post/${postidCard}`);

    getPosts();
  };

  const newPost = async (data: iPost) => {
    const newData = {
      ...data,
    };
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const resRequest = await instanceHeaders.post("/post", newData);

      setPost([resRequest.data, ...post]);

      //toast.success("Aeee! Publicado com sucesso! 👩‍💻");
    } catch (error) {
      console.log(error);
      // toast.error("Opa! Algo deu errado 👀");
    }
  };

  return (
    <ForumContext.Provider
      value={{
        newPost,
        post,
        handleDelete,
        setPost,
        getPosts,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
