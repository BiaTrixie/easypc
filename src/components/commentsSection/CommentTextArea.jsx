/* eslint-disable react/prop-types */
import TextareaAutosize from "react-textarea-autosize";
import Swal from "sweetalert2";

const CommentTextArea = ({ inputText, onChangeHandler, auth }) => {
  const onclickHandler = () => {
    if (!auth) {
      Swal.fire("Você precisa estra logado para comentar nesse post!");
    }
  };
  return (
    <>
      <TextareaAutosize
        onClick={onclickHandler}
        minRows={4}
        maxRows={6}
        value={inputText}
        onChange={onChangeHandler}
        placeholder='deixe um comentário...'
        className='w-full rounded-lg text-zinc-800 '
      />
    </>
  );
};

export default CommentTextArea;
