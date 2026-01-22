import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from "../../components/common";
import listing from "./listing";

export default () => <>
    <SiteHeader active="events" />

    <Breadcrumbs crumbs={["Events"]} />

    <div className="blog-area pb-5">
        <div className="container">
            <div className="row justify-content-left">
                {listing.map(event => <EventCard {...event} />)}
            </div>
        </div>
    </div>

    <SiteFooter />
    <ScrollTop />
</>

const EventCard = ({ title, image, date, location, body }) => {
    const link = "/events/" + title.replaceAll(" ", "-");

    return <div className="col-lg-4 col-md-8 col-sm-10 single-blog blog-style-one">
        <div className="blog-image">
            <a href={link}><img src={image} alt="Blog" /></a>
            <a href={link} className="category">{location}</a>
        </div>
        <div className="blog-content">
            <h5 className="blog-title"> <a href={link}> {title} </a> </h5>
            <span><i className="lni lni-calendar"></i> {date}</span>
            <p className="text"> {body} </p>
            <a className="more" href={link}>READ MORE</a>
        </div>
    </div>
}