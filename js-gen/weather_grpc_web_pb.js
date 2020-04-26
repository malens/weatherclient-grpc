/**
 * @fileoverview gRPC-Web generated client stub for weatherproto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.weatherproto = require('./weather_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.weatherproto.WeatherClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.weatherproto.WeatherPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.weatherproto.City,
 *   !proto.weatherproto.WeatherResponse>}
 */
const methodDescriptor_Weather_subscribe = new grpc.web.MethodDescriptor(
  '/weatherproto.Weather/subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.weatherproto.City,
  proto.weatherproto.WeatherResponse,
  /**
   * @param {!proto.weatherproto.City} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.weatherproto.WeatherResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.weatherproto.City,
 *   !proto.weatherproto.WeatherResponse>}
 */
const methodInfo_Weather_subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.weatherproto.WeatherResponse,
  /**
   * @param {!proto.weatherproto.City} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.weatherproto.WeatherResponse.deserializeBinary
);


/**
 * @param {!proto.weatherproto.City} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.weatherproto.WeatherResponse>}
 *     The XHR Node Readable Stream
 */
proto.weatherproto.WeatherClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/weatherproto.Weather/subscribe',
      request,
      metadata || {},
      methodDescriptor_Weather_subscribe);
};


/**
 * @param {!proto.weatherproto.City} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.weatherproto.WeatherResponse>}
 *     The XHR Node Readable Stream
 */
proto.weatherproto.WeatherPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/weatherproto.Weather/subscribe',
      request,
      metadata || {},
      methodDescriptor_Weather_subscribe);
};


module.exports = proto.weatherproto;

