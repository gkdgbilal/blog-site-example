import {getAllPosts} from "../api";
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Home({posts}) {
    return (
        <>
            <Head>
                <title>My Blog!</title>
            </Head>
            <ul className="w-3/5 text-xl m-auto text-center pt-12">
                {posts.map(({frontmatter, slug}) => (
                    <li>
                        <Link href={`/blog/${slug}`}>
                            <a className="text-blue-600 text-4xl">
                                <h1>{frontmatter.title}</h1>
                            </a>
                        </Link>
                        <p className="text-2xl">{frontmatter.date}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts()

    return {
        props: {
            posts
        }
    }
}
