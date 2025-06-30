import dynamic from 'next/dynamic'
import {useEffect, useState} from 'react'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]
type textDefaults ={
  text:string | undefined;
  change:Function;
  required?:boolean;
}
 const RichTextEditor: React.FC<textDefaults> = ({text,change,required = false}) => {
  const [editorHtml, setEditorHtml] = useState('<p>Your initial content here</p>');
  useEffect(() => {    
    if(text !== undefined){
      setEditorHtml(text);
    }
  },[text])
  const handleChange = (html:string) => {    
    change(html)
    setEditorHtml(html);
  };
  return <QuillNoSSRWrapper onChange={handleChange} value={editorHtml} modules={modules} formats={formats} theme="snow" />
}

export default RichTextEditor