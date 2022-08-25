import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {
  

    constructor() {
      super()
      this.state = {
        articles :[],
        loading :false,
        page:1
      
      }
    }

    async componentDidMount(){
      console.log("===>",this.props)
        this.setState({loading:true});
        let url   = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6271bdf7999b4c9ba6990d433e6c7dc3&page=1&pageSize=${this.props.pageSize}`;
        let data  = await fetch(url);
        let parsedData =await data.json();
        console.log(parsedData);
        this.setState({ 
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          page: 2,
          loading:false
        });
        
    }

    async componentDidUpdate(prevProps){
        console.log("===> in CDU")
      if(prevProps.category != this.props.category){
        console.log("===>",this.props)
        this.setState({loading:true});
        let url   = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6271bdf7999b4c9ba6990d433e6c7dc3&page=1&pageSize=${this.props.pageSize}`;
        let data  = await fetch(url);
        let parsedData =await data.json();
        console.log(parsedData);
        this.setState({ 
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          page: 2,
          loading:false
        });
      }
     
        
    }



    handleNextClick = async ()=>{

        if(!(this.state.page + 1 >  Math.ceil(this.state.totalResults/this.state.pageSize))){
      
          console.log("----Next---",this.state.page);
          let url   = `https://newsapi.org/v2/top-headlines?country=${this.props.category}&apiKey=6271bdf7999b4c9ba6990d433e6c7dc3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data  = await fetch(url);
          let parsedData =await data.json();
          console.log("data",parsedData);
          this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading:false
           
          });
        }
    }

    handlePrevClick = async ()=>{

      if(!(this.state.page + 1  >  Math.ceil(this.state.totalResults/this.state.pageSize)))
      {
              let url   = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6271bdf7999b4c9ba6990d433e6c7dc3&page=${this.setState.page - 1}&pageSize=${this.props.pageSize}`;
              let data  = await fetch(url);
              let parsedData =await data.json();
              console.log(parsedData);
              this.setState({ 
                page:this.state.page - 1,
                articles:parsedData.articles,
                loading:false
              });
      }
    }
   
  render() {

   
    return (
      <div className='container my-3'>
       <h1 className='text-center'> MonkeyNews - Top Headlines </h1>
       {this.state.loading && <Spinner/>}
          <div className="row">
           {
               this.state.articles.length > 0 ?
               this.state.articles.map((element)=>(
               <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title:""} 
                            description={element.description ?element.description:""}   
                            imageUrl={element.urlToImage ? element.urlToImage :"https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"} 
                            newsUrl={element.url?element.url:"#"}/>
               </div>

               )):
               <div className="col-md-4">No Record found! </div>
           }
          </div>
       <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &#x2190;Previous</button>
            <button class="btn btn-dark" onClick={this.handleNextClick}>Next &#x2192;</button>
            
            
       </div>
      </div>
    )
  }
}

export default News
