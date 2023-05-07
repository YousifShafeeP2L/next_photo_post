import Head from 'next/head';
import Photos from './photo/photos';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Photos images={props.images} status={"ACCEPTED"}></Photos>
    </>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}