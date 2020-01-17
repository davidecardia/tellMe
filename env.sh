#!/usr/bin/env bash
NODE_HOME="/opt/node"
PATH="./node_modules/.bin:${NODE_HOME}/bin:${PATH}"
ANDROID_HOME="${HOME}/Android/Sdk"
ANDROID_SDK_ROOT="${HOME}/Android/Sdk"
PATH="${ANDROID_SDK_ROOT}/tools:${ANDROID_SDK_ROOT}/platform-tools:${PATH}"
JAVA_HOME="/opt/java/jdk1.8.0_221"
PATH="${JAVA_HOME}/bin:${PATH}"

export GRADLE_HOME=/opt/gradle/gradle-5.0
export PATH=${GRADLE_HOME}/bin:${PATH}
export NODE_HOME
export ANDROID_SDK_ROOT
export ANDROID_HOME
export PATH
