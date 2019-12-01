'use strict';

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.post('/files', 'FileController.store')
Route.group(() => {
  Route.get('/files/:id', 'FileController.show')

  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
