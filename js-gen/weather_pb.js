// source: weather.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.weatherproto.City', null, global);
goog.exportSymbol('proto.weatherproto.Date', null, global);
goog.exportSymbol('proto.weatherproto.WeatherDay', null, global);
goog.exportSymbol('proto.weatherproto.WeatherRequest', null, global);
goog.exportSymbol('proto.weatherproto.WeatherResponse', null, global);
goog.exportSymbol('proto.weatherproto.WeatherState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weatherproto.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weatherproto.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weatherproto.Date.displayName = 'proto.weatherproto.Date';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weatherproto.WeatherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weatherproto.WeatherRequest.repeatedFields_, null);
};
goog.inherits(proto.weatherproto.WeatherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weatherproto.WeatherRequest.displayName = 'proto.weatherproto.WeatherRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weatherproto.WeatherDay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weatherproto.WeatherDay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weatherproto.WeatherDay.displayName = 'proto.weatherproto.WeatherDay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weatherproto.WeatherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weatherproto.WeatherResponse.repeatedFields_, null);
};
goog.inherits(proto.weatherproto.WeatherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weatherproto.WeatherResponse.displayName = 'proto.weatherproto.WeatherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weatherproto.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weatherproto.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weatherproto.City.displayName = 'proto.weatherproto.City';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weatherproto.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.weatherproto.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weatherproto.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.Date.toObject = function(includeInstance, msg) {
  var f, obj = {
    day: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weatherproto.Date}
 */
proto.weatherproto.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weatherproto.Date;
  return proto.weatherproto.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weatherproto.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weatherproto.Date}
 */
proto.weatherproto.Date.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weatherproto.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weatherproto.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weatherproto.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.Date.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 day = 1;
 * @return {number}
 */
proto.weatherproto.Date.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.weatherproto.Date} returns this
 */
proto.weatherproto.Date.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.weatherproto.Date.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.weatherproto.Date} returns this
 */
proto.weatherproto.Date.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 year = 3;
 * @return {number}
 */
proto.weatherproto.Date.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.weatherproto.Date} returns this
 */
proto.weatherproto.Date.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weatherproto.WeatherRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weatherproto.WeatherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weatherproto.WeatherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weatherproto.WeatherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    city: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dateList: jspb.Message.toObjectList(msg.getDateList(),
    proto.weatherproto.Date.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weatherproto.WeatherRequest}
 */
proto.weatherproto.WeatherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weatherproto.WeatherRequest;
  return proto.weatherproto.WeatherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weatherproto.WeatherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weatherproto.WeatherRequest}
 */
proto.weatherproto.WeatherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 2:
      var value = new proto.weatherproto.Date;
      reader.readMessage(value,proto.weatherproto.Date.deserializeBinaryFromReader);
      msg.addDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weatherproto.WeatherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weatherproto.WeatherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weatherproto.WeatherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.weatherproto.Date.serializeBinaryToWriter
    );
  }
};


/**
 * optional string city = 1;
 * @return {string}
 */
proto.weatherproto.WeatherRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weatherproto.WeatherRequest} returns this
 */
proto.weatherproto.WeatherRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Date date = 2;
 * @return {!Array<!proto.weatherproto.Date>}
 */
proto.weatherproto.WeatherRequest.prototype.getDateList = function() {
  return /** @type{!Array<!proto.weatherproto.Date>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.weatherproto.Date, 2));
};


/**
 * @param {!Array<!proto.weatherproto.Date>} value
 * @return {!proto.weatherproto.WeatherRequest} returns this
*/
proto.weatherproto.WeatherRequest.prototype.setDateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.weatherproto.Date=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weatherproto.Date}
 */
proto.weatherproto.WeatherRequest.prototype.addDate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.weatherproto.Date, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weatherproto.WeatherRequest} returns this
 */
proto.weatherproto.WeatherRequest.prototype.clearDateList = function() {
  return this.setDateList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weatherproto.WeatherDay.prototype.toObject = function(opt_includeInstance) {
  return proto.weatherproto.WeatherDay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weatherproto.WeatherDay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherDay.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto.weatherproto.Date.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weatherproto.WeatherDay}
 */
proto.weatherproto.WeatherDay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weatherproto.WeatherDay;
  return proto.weatherproto.WeatherDay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weatherproto.WeatherDay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weatherproto.WeatherDay}
 */
proto.weatherproto.WeatherDay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weatherproto.Date;
      reader.readMessage(value,proto.weatherproto.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {!proto.weatherproto.WeatherState} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weatherproto.WeatherDay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weatherproto.WeatherDay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weatherproto.WeatherDay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherDay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.weatherproto.Date.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Date date = 1;
 * @return {?proto.weatherproto.Date}
 */
proto.weatherproto.WeatherDay.prototype.getDate = function() {
  return /** @type{?proto.weatherproto.Date} */ (
    jspb.Message.getWrapperField(this, proto.weatherproto.Date, 1));
};


/**
 * @param {?proto.weatherproto.Date|undefined} value
 * @return {!proto.weatherproto.WeatherDay} returns this
*/
proto.weatherproto.WeatherDay.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weatherproto.WeatherDay} returns this
 */
proto.weatherproto.WeatherDay.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weatherproto.WeatherDay.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WeatherState state = 2;
 * @return {!proto.weatherproto.WeatherState}
 */
proto.weatherproto.WeatherDay.prototype.getState = function() {
  return /** @type {!proto.weatherproto.WeatherState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weatherproto.WeatherState} value
 * @return {!proto.weatherproto.WeatherDay} returns this
 */
proto.weatherproto.WeatherDay.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weatherproto.WeatherResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weatherproto.WeatherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weatherproto.WeatherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weatherproto.WeatherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    city: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weatherList: jspb.Message.toObjectList(msg.getWeatherList(),
    proto.weatherproto.WeatherDay.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weatherproto.WeatherResponse}
 */
proto.weatherproto.WeatherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weatherproto.WeatherResponse;
  return proto.weatherproto.WeatherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weatherproto.WeatherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weatherproto.WeatherResponse}
 */
proto.weatherproto.WeatherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 2:
      var value = new proto.weatherproto.WeatherDay;
      reader.readMessage(value,proto.weatherproto.WeatherDay.deserializeBinaryFromReader);
      msg.addWeather(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weatherproto.WeatherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weatherproto.WeatherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weatherproto.WeatherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.WeatherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeatherList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.weatherproto.WeatherDay.serializeBinaryToWriter
    );
  }
};


/**
 * optional string city = 1;
 * @return {string}
 */
proto.weatherproto.WeatherResponse.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weatherproto.WeatherResponse} returns this
 */
proto.weatherproto.WeatherResponse.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated WeatherDay weather = 2;
 * @return {!Array<!proto.weatherproto.WeatherDay>}
 */
proto.weatherproto.WeatherResponse.prototype.getWeatherList = function() {
  return /** @type{!Array<!proto.weatherproto.WeatherDay>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.weatherproto.WeatherDay, 2));
};


/**
 * @param {!Array<!proto.weatherproto.WeatherDay>} value
 * @return {!proto.weatherproto.WeatherResponse} returns this
*/
proto.weatherproto.WeatherResponse.prototype.setWeatherList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.weatherproto.WeatherDay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weatherproto.WeatherDay}
 */
proto.weatherproto.WeatherResponse.prototype.addWeather = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.weatherproto.WeatherDay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weatherproto.WeatherResponse} returns this
 */
proto.weatherproto.WeatherResponse.prototype.clearWeatherList = function() {
  return this.setWeatherList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weatherproto.City.prototype.toObject = function(opt_includeInstance) {
  return proto.weatherproto.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weatherproto.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weatherproto.City}
 */
proto.weatherproto.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weatherproto.City;
  return proto.weatherproto.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weatherproto.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weatherproto.City}
 */
proto.weatherproto.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weatherproto.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weatherproto.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weatherproto.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weatherproto.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.weatherproto.City.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weatherproto.City} returns this
 */
proto.weatherproto.City.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.weatherproto.WeatherState = {
  CLEAR: 0,
  CLOUDY: 1,
  RAIN: 2,
  SNOW: 3
};

goog.object.extend(exports, proto.weatherproto);
