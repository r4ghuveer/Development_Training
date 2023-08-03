import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    articles = [
        {
            "source": {
                "id": "google-news-uk",
                "name": "Google News (UK)"
            },
            "author": "The Guardian",
            "title": "Labour urged to work with Tories to counter 'ignorant' climate policy attacks - The Guardian",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9lbnZpcm9ubWVudC8yMDIzL2p1bC8yNS9sYWJvdXItdXJnZWQtdG8td29yay13aXRoLXRvcmllcy10by1jb3VudGVyLWlnbm9yYW50LWNsaW1hdGUtcG9saWN5LWF0dGFja3PSAX9odHRwczovL2FtcC50aGVndWFyZGlhbi5jb20vZW52aXJvbm1lbnQvMjAyMy9qdWwvMjUvbGFib3VyLXVyZ2VkLXRvLXdvcmstd2l0aC10b3JpZXMtdG8tY291bnRlci1pZ25vcmFudC1jbGltYXRlLXBvbGljeS1hdHRhY2tz?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-07-25T22:13:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Hannah Grossman",
            "title": "Greta Thunberg dragged out of oil facility by police, claims crime is self-defense from fossil fuels",
            "description": "Greta Thunberg, a climate activist from Reclaim the Future, is dragged out of an oil facility hours after",
            "url": "https://www.foxnews.com/media/greta-thunberg-dragged-out-oil-facility-police-claims-crime-self-defense-fossil-fuels",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/Screen-Shot-2023-07-25-at-1.34.20-PM.png",
            "publishedAt": "2023-07-25T21:00:53Z",
            "content": "Climate activist Greta Thunberg was dragged out of another protest at an oil facility in Malmö, Sweden, by police, video footage that emerged Monday showed. \r\nIt was mere hours after a Swedish court … [+2798 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Howard Lee",
            "title": "Mass extinction event 260 million years ago resulted from climate change, studies say",
            "description": "Ocean stagnation, ecosystem collapses, and volcano eruptions all played a role.",
            "url": "https://arstechnica.com/science/2023/07/studies-reveal-causes-of-a-lesser-known-mass-extinction-about-260-million-years-ago/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/07/Titanophoneus_3-760x380.jpg",
            "publishedAt": "2023-07-25T18:00:00+00:00",
            "content": "Enlarge/ Artists depiction of two dinocephalians, a group of land animals that\r\ndied out in the Captitanian extinction(s).\r\n36 with \r\nThe Capitanian mass extinction was once lumped in with the Great … [+3416 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "SETH BORENSTEIN / AP",
            "title": "Scientists Link Climate Change To July Heat Waves in Europe, China, and the U.S.",
            "description": "The fingerprints of climate change are all over the intense heat waves gripping the globe this month, a new study finds.",
            "url": "http://time.com/6297377/heat-waves-climate-change-july-2023/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/07/extreme-heat-waves-climate-change-science.jpg?quality=85",
            "publishedAt": "2023-07-25T13:25:57Z",
            "content": "The fingerprints of climate change are all over the intense heat waves gripping the globe this month, a new study finds. Researchers say the deadly hot spells in the American Southwest and Southern E… [+4050 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Eric Niiler, Ed Ballard",
            "title": "Pouring Ice Into Concrete: Builders Adapt to Extreme Heat",
            "description": "Engineers and architects seek solutions as climate warms",
            "url": "https://www.wsj.com/articles/pouring-ice-into-concrete-builders-adapt-to-extreme-heat-25142854?mod=hp_lead_pos7",
            "urlToImage": "https://images.wsj.net/im-820883/social",
            "publishedAt": "2023-07-25T12:14:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Michael J. Coren",
            "title": "The world needs a new way to talk about heat",
            "description": "We need to rethink the way we talk about heat to communicate dangers in a hotter world. Here's a guide to the new heat scale in era of climate change.",
            "url": "https://www.washingtonpost.com/climate-environment/2023/07/25/heat-index-wet-bulb-temperatures-dangerous/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NYHFFVVUYJB5LFA3G3NQNCQPBE.jpg&w=1440",
            "publishedAt": "2023-07-25T10:30:00Z",
            "content": "Comment on this story\r\nComment\r\nEarlier this summer, officials from the U.N. weather agency admitted theyre still figuring out how to tell 8 billion people around the world what constitutes deadly he… [+10271 chars]"
        },
        {
            "source": {
                "id": "the-huffington-post",
                "name": "The Huffington Post"
            },
            "author": "AP",
            "title": "Fingerprints Of Climate Change 'All Over' July Heat Waves In U.S. Southwest And Europe",
            "description": "Several climate scientists say this month’s heat is likely the hottest Earth has been in about 120,000 years, easily the hottest of human civilization.",
            "url": "https://www.huffpost.com/entry/climate-change-fingerprints-heatwaves_n_64bf9509e4b0ad7b75fa0c30",
            "urlToImage": "https://img.huffingtonpost.com/asset/64bf96fa23000032009df81d.jpeg?cache=jfC4a5aDLo&ops=1200_630",
            "publishedAt": "2023-07-25T10:13:32Z",
            "content": "The fingerprints of climate change are all over the intense heat waves gripping the globe this month, a new study finds.\r\nResearchers say the deadly hot spells in the American Southwest and Southern … [+4512 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Eamon Barrett",
            "title": "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
            "description": "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
            "url": "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
            "publishedAt": "2022-06-01T10:31:29Z",
            "content": "Skip to Content"
        }
    ]

    caps = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.caps(this.props.category)} - Bit News`
    }


    async componentDidMount() {
        this.updateNews();
    }


    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }


    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32e8e8d6244546d992e4cb9419b7c42c&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }


    handlePreviousClick = async () => {

        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    fetchMoreData = async () =>{
        this.setState({
            page: this.state.page+1,
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32e8e8d6244546d992e4cb9419b7c42c&page=${this.state.page}&pagesize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }



    render() {
        return (
            <>
                <h1 className="text-center my-5">Bit News - Top {this.caps(this.props.category)} headlines  </h1>

                {this.state.loading && < Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title?.slice(0, 45)} description={element.description?.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                
            </>
        )
    }
}

export default News
