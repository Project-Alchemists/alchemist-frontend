// querySensorData.js

const ApolloClient = require('apollo-client').ApolloClient;
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const crossFetch = require('cross-fetch');
import gql from 'graphql-tag';

// Include protobuf to decode the device data into JSON
const protobuf = require("protobufjs");

// TruStream Subgraph Endpoint to fetch verified telemetry
const TRUSTREAM_SUBGRAPH = "https://subgraph.iott.network/subgraphs/name/iotex/pebble-subgraph";

// GraphQL Query to fetch the first 10 data points, 
// from device with IMEI 100000000000005

    const client = new ApolloClient({
        link: createHttpLink({
            uri: TRUSTREAM_SUBGRAPH,
            fetch: crossFetch
        }),
        cache: new InMemoryCache()
    });
export default async function GetSensorData({imei="100000000000005",first=10,skip=0}) {
    const DEVICE_TELEMETRY_QUERY =
    gql`
    {
        deviceRecords(orderBy: timestamp,  orderDirection:desc, where: { imei: ${imei} }, first : ${first}, skip: ${skip}) {
            raw 
            imei
            signature
        }
    }
    `
    // Create the GraphQL client
    

    // Run the query
    const queryResult = await client.query({ query: DEVICE_TELEMETRY_QUERY });

    // Log all the data points to the console
    console.log(queryResult.data.deviceRecords);

    // Let's decode the first data message 
    const dataPoint = queryResult.data.deviceRecords[0];

    // Load the protobuf definition, it's on GitHub at
    // https://github.com/iotexproject/iott-dapp-example/blob/main/service/proto/pebble.proto
    const pebbleProtoDef = await protobuf.load("pebble.proto");
    // We need the SensorData proto definition, let's import it
    const SensorData = pebbleProtoDef.lookupType('SensorData');
    // Decode the telemetry
    const encodedTelemetry = dataPoint.raw.replace(/0x/g, '');
    const telemetry = SensorData.decode(Buffer.from(encodedTelemetry,"hex"));
    
    // Log the telemetry
    console.log(telemetry);
    return telemetry;

}
