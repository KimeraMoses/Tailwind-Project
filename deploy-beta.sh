#!/bin/bash

yarn run build:beta && firebase deploy --only hosting:beta