INCLUDE_DIRECTORIES(
${CMAKE_SOURCE_DIR}
${CMAKE_SOURCE_DIR}/scribus
${LIBPODOFO_INCLUDE_DIR}
${FREETYPE_INCLUDE_DIRS}
)

SET(SCRIBUS_IMPOSITION_LIB_SOURCES
impositioninputfile.cpp
impositionoutputfile.cpp
impositionoptions.cpp
imposition.cpp
)

SET(SCRIBUS_IMPOSITION_LIB "scribus_imposition_lib")

ADD_LIBRARY(${SCRIBUS_IMPOSITION_LIB} STATIC ${SCRIBUS_IMPOSITION_LIB_SOURCES})
# This is a convenience library that for linkage purposes is part of Scribus's
# main API.

SET_TARGET_PROPERTIES(${SCRIBUS_IMPOSITION_LIB}
  PROPERTIES
  COMPILE_FLAGS -DCOMPILE_SCRIBUS_MAIN_APP
  )
