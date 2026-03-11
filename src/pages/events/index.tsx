import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from "../../components/common";
import listing from "../../components/events";

export default () => <>
    <SiteHeader active="events" />

    <Breadcrumbs crumbs={["Events"]} />

    <style>{`.event-text { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; max-height: 6.5em; }`}</style>

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

    return <div className="col-lg-4 col-md-8 col-sm-10 single-blog blog-style-one d-flex flex-column h-100">
        <div className="blog-image" style={{ height: 200, overflow: 'hidden' }}>
            <a href={link}><img src={image} alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></a>
            <a href={link} className="category">{location}</a>
        </div>
        <div className="blog-content d-flex flex-column flex-grow-1">
            <h5 className="blog-title"> <a href={link}> {title} </a> </h5>
            <span><i className="lni lni-calendar"></i> {date}</span>
            <p className="text event-text flex-grow-1"> {body} </p>
            <a className="more" href={link}>READ MORE</a>
        </div>
    </div>
}