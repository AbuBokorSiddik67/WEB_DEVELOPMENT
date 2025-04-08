
import { use } from 'react';
import { Suspense } from 'react';
import './App.css'
import New from './New'

function App() {
  const LoadData = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostData fetchPost={LoadData}></PostData>
      </Suspense>
    </>
  )
}

const PostData = ({fetchPost}) => {
  const post = use(fetchPost);
  return (
    post.map(post => {
      return (
        <div className='border-2 border-white p-2 mb-2' key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )
    })
  )
}

export default App

