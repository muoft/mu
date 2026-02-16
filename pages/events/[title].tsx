import { usePathname } from "next/navigation";
import listing from "../../components/events";
import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../../components/common'

export default () => {
    const title = usePathname()?.split('/').pop().replaceAll('-', ' ')
    const event = listing.find(event => event.title === title)
    return <>
        <SiteHeader active="events" />
        <Breadcrumbs crumbs={["Events", title]} />
        <EventPage {...event} />
        <SiteFooter />
        <ScrollTop />
    </>
}


const EventPage = ({ title, image, body, date, location }) => {
    return <section className="about section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="content wow fadeInRight" data-wow-delay=".4s">
                        <h3>{title}</h3>
                        <h6>{date}, {location}</h6>
                        <p style={{ whiteSpace: 'pre-line' }}> {body} </p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="image wow fadeInRight" data-wow-delay=".2s">
                        <img src={image} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}