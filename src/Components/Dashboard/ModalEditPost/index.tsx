import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ForumContext } from "../../../context/ForumContext";
import { instance } from "../../../service/api";
import { iPropsModal } from "../CardPosts";
import { RegisterPost } from "./style";

const ModalEdit = ({
  handleModalUpdate,
  postidCard,
  postsContent,
}: iPropsModal) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { content: postsContent },
  });

  const { post, setPost, getPosts } = useContext(ForumContext);

  const editPost = async (content: any) => {
    console.log(content);
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await instance.patch(`/post/${postidCard}`, content);
      setPost([...post, data]);
      getPosts();
      handleModalUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [postsContent]);

  return (
    <>
      <RegisterPost>
        <main>
          <h2>Editar postagem</h2>

          <form className="modalForm" onSubmit={handleSubmit(editPost)}>
            <textarea id="text" {...register("content")} />
            <div>
              <button className="edit">Editar</button>
              <button className="cancel" onClick={() => handleModalUpdate()}>
                cancelar
              </button>
            </div>
          </form>
        </main>
      </RegisterPost>
    </>
  );
};
export default ModalEdit;
