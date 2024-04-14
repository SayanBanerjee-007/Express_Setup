import { ApiResponse, ApiError, asyncHandler } from '../utils/index.js'

const testController = asyncHandler((req, res, next) => {
  res.status(200).send(new ApiResponse(200, 'Hello World!'))
})

export { testController }
