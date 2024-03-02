import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { Button, Input, RTE, Select } from "../index";

function PostForm({ post }) {
  const { register, handleSubmit, watch, getValues, setValue, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData)
  return <div>PostForm</div>;
}

export default PostForm;
