import Head from 'next/head';
import { useEffect, useState } from 'react';
import HTMLIde from '../src/components/HTMLIde';

export default function IDE() {
    const [content, setContent] = useState('');
    useEffect(() => {
        setContent(`<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>

        </body>

        </html>
        `);
    }, [setContent]);
    return (
        <>
            <Head>
                <title>Chapter 1</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HTMLIde content={content} setContent={setContent}></HTMLIde>
        </>
    );
}