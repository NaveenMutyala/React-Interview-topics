import React, { useState } from 'react';
import type { JSX } from 'react';
import type { FileItem } from '../data/fileExplorer';

type Directory ={
    directory:FileItem
}

const FileDirectory = ({directory}:Directory):JSX.Element => {
    const [show,setShow] = useState<boolean>(false);
    return (
        <div style={{marginLeft:"20px"}}>
            {directory.isFolder &&  <h2 onClick={()=>setShow(!show)}>{!show ? "📁" : "📂"}{directory.name} {show ? "-" : "+"}</h2>}
            {!directory.isFolder && <h2>{"🗒️"}{directory.name} </h2>}
            {show && directory.items.map((item:FileItem)=>(<FileDirectory key={item.id} directory={item} />))}
        </div>
    );
};

export default FileDirectory;