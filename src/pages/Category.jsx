/* eslint-disable react-hooks/exhaustive-deps */
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import CardSkeleton from "../components/skeleton/CardSkeleton";

const Category = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const blogRef = collection(db, "blogs");
        const q = query(
          blogRef,
          where("blogData.category", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(6)
        );
        const querySnap = await getDocs(q);
        const blogs = [];
        querySnap.forEach((doc) => {
          blogs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBlogData(blogs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.categoryName]);

  return (
    <div className='mx-auto max-w-7xl'>
      <h1 className='my-12 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-center text-5xl font-bold text-transparent'>
        Artigos relacionados a: 
        <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text font-extrabold capitalize text-transparent'>
          {params.categoryName}
        </span>
      </h1>

      <div className='mx-auto mt-12 grid w-[80%] grid-cols-1 gap-5 md:w-[95%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : blogData && blogData.length > 0 ? (
          blogData.map((blog) => (
            <Card key={blog.id} id={blog.id} blog={blog.data} />
          ))
        ) : (
          <p className='mt-24 text-center text-4xl font-extrabold'>
            Artigos não encontrados
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
