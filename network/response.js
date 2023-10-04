const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error',
}

exports.success = (req, res, message, status) => {
  let statusCode = status ?? 200;
  let statusMessage = message ?? statusMessages[statusCode];

  res.status(statusCode).send({
    error: '',
    body: statusMessage,
  });
};

exports.error = (req, res, message, status, details) => {
  let statusCode = status ?? 500;
  let statusMessage = message ?? statusMessages[statusCode];

  console.error('[response error]', details);

  res.status(statusCode).send({
    error: statusMessage,
    body: ''
  });
};
