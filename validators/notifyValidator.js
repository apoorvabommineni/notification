const yup = require('yup');

const schema = yup.object().shape({
  message: yup.string().required(),
  recipients: yup.array().of(
    yup.object().shape({
      type: yup.string().oneOf(['email', 'sms', 'slack']).required(),
      to: yup.string().required()
    })
  ).required()
});

exports.validateNotify = async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};