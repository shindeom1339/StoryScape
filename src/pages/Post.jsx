import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaUserSecret } from 'react-icons/fa'
import appwriteUserService from '../appwrite/auth'

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    // ////////////////////////DATE AND TIME TO DISPLAY ON EACH POST USER DETAILS
    // const [date, setDate] = useState('')
    // const [time, setTime] = useState('')

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    // ////////////////////////AUTHOR NAME LOGIC TO DISPLAY EACH POST USER DETAILS
    // const [authorName, setAuthorName] = useState('')
    // useEffect(() => {
    //     if (post && userData && post.userId) {
    //         const fetchAuthorDetails = async () => {
    //             try {
    //                 const authorDetails = await appwriteUserService.getUserById(post.userId);
    //                 console.log(authorDetails);
    //                 setAuthorName(authorDetails.name);
    //             } catch (error) {
    //                 console.error("Error fetching author details:", error);
    //             }
    //         };

    //         fetchAuthorDetails();
    //     }
    // }, [post, userData]);

    // ////////////////////////DATE AND TIME LOGIC TO DISPLAY EACH POST USER DETAILS
    // useEffect(() => {
    //     if (post && post.$createdAt) {
    //         const createdAtDateTime = new Date(post.$createdAt)
    //         const dateString = createdAtDateTime.toDateString();
    //         const timeString = createdAtDateTime.toLocaleTimeString()
    //         setTime(timeString)
    //         setDate(dateString)
    //     }
    // }, [post])

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border-2 border-[#175943] rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="lg:w-4/6 w-5/6 mt-6 sm:mb-6 object-contain max-h-96 object-center"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* DISPLAY THE USER DETIALS HERE */}
                {/* <hr />
                <div className="flex justify-between items-center">
                    <div className=" text-left flex gap-2">
                        <span
                            className="bg-gray-600 cursor-pointer text-white text-center uppercase w-10 h-10 aspect-square text-2xl font-semibold rounded-full flex items-center justify-center"
                        >
                            {post.status == "Post Anonymous" ? (
                                <FaUserSecret />
                            ) : (
                                userData.name[0]
                            )}
                        </span>
                        <div>
                            <h2 className="font-semibold line-clamp-1">
                                {authorName}
                            </h2>
                            {date && (<h2 className="text-gray-500  text-sm leading-4  ">
                                {date}, {time}
                            </h2>)}
                        </div>
                    </div>
                </div>
                <hr /> */}

                <div className="text-left">
                    <div className="w-full mb-6">
                        <h1 className="text-3xl font-bold text-center">{post.title}</h1>
                    </div>
                    <p className="browser-css text-lg whitespace-break-spaces custom-content">
                        {parse(post.content)}
                    </p>
                </div>
            </Container>
        </div>
    ) : null;
}