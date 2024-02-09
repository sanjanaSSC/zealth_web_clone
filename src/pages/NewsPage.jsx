import React ,{useState,useEffect,useMemo} from 'react'
import ReactPaginate from 'react-paginate'
import '../App.css'
import NewsCard from '../components/NewsCard'
import NewsList from './NewsList.json'
import Navbar from '../components/Navbar'
import Footerpage from '../components/Footerpage'

function ApplicationList({applications}){
  const [sheet, setSheet] = useState([]);
  const [count,setCount] =useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const pageSize = 6
  const pageVisited = pageNumber * pageSize


  const update = ()=>{
    setSheet([]);
    let lastId;
    applications.forEach((application)=>{
      setSheet(sheet=>[<NewsCard
        key={application.id}
        props={application}
        />,
        ...sheet
      ])
      lastId=application.id;
      setCount(lastId);
    })
  }
  useMemo(()=>{
    update(count)
  },[applications])
  
  const displayUsers = applications.slice(pageVisited, pageVisited + pageSize)
  .map((application) => {
  console.log(applications,'yes')

  return(
        <div className='col-span-1'>
            <NewsCard
            key={application.id}
            props={application}
            />
    </div>
  );
})

const pageCount = Math.ceil(applications.length / pageSize );

const changePage = ({selected})=>{
  setPageNumber(selected)
};


  return(
    <div>
    
      <Navbar/>
      <h2 className='text-center text-blue-900 text-2xl font-bold pt-28'>News</h2>
      {((sheet.length==0) ? 
      <div className='flex justify-center border-2 rounded lg py-4 mx-4 shadow-sm shadow-red-300 px-28'>
        <p className='text-xl'>No New Applications</p>
      </div> 
       : 
       <div className='px-4  md:px-28 pb-20'>
         {console.log(displayUsers,'user')}
         <div className='flex flex-col md:grid md:grid-cols-2 mb-5'>
          {displayUsers}
         </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
     </div>)}
     <Footerpage/>
    </div>
    
  );
}

export default function NewsPage(){
  return(
    <ApplicationList applications={NewsList}/>
  )
}