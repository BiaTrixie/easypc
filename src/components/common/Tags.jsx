import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  const styles = {
    categoryBtn:
      "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-5 py-2 md:py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  };
  return (
    <ul className='mx-4 mt-6 flex items-center overflow-x-scroll pl-4 capitalize text-white md:mx-0  md:flex-wrap md:overflow-auto lg:justify-center lg:pl-0'>
      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/fundamentos"}>fundamentos</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/componentes"}>componentes</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/montagem"}>montagem</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/sistema"}>sistema</Link>{" "}
      </li>
      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/segurança"}>segurança</Link>{" "}
      </li>
      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/personalizacao"}>personalização</Link>{" "}
      </li>
      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/dicas"}>dicas</Link>{" "}
      </li>
    </ul>
  );
};

export default Tags;
