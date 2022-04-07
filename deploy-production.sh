#!/bin/bash

yarn run build:production && firebase deploy --only hosting:production