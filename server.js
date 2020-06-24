const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Creating a PORT and requiring models to sync
const PORT = process.env.PORT || 3000;
const db = require("./models");