import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../lib/utils";

const type : IResolvers = {
    Season: {
        year: parent => parent.season,  //convertir el season en year para el graphql
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        name: parent => parent.givenName.concat(' ').concat(parent.familyName)

    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent  => getWikipediaMobileUrl(parent.url)
    }
}

export default type;