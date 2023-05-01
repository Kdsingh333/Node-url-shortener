const Data = require('./model/Data');

const generateRandom = async () => {
  return random = (Math.random() + 1).toString(36).substring(7);
}


const checkCustom = async (custom) => {
  const customCheck = await Data.findOne({ shortUrl: custom });
  if (customCheck) return true;
  else return false;
}



const shortUrl = async (req, res) => {

  const urlExist = await Data.findOne({ longUrl: req.body.longUrl });
  if (urlExist) {
    res.send("http://localhost:3000/", urlExist.shortUrl);
    return;
  }

  const data = new Data({
    longUrl: req.body.longUrl,
    shortUrl: await generateRandom()
  });

  try {
    const saveData = await data.save();
    res.send("http://localhost:3000/" + data.shortUrl);
  } catch (err) {
    res.status(400).send(err);
  }
};



const customUrl = async (req, res) => {
  console.log(req.body.shortUrl);
  const custom = await checkCustom(req.body.shortUrl);
  if (custom) {
    res.send("ShortUrl Already Exists ,Please try someother");
    return;
  }
  else {
    const data = new Data({
      longUrl: req.body.longUrl,
      shortUrl: req.body.shortUrl
    });

    try {
      const saveData = await data.save();
      res.send("http://localhost:3000/" + data.shortUrl);
    } catch (err) {
      res.status(400).send(err);
    }
  }

};


const redirectUrl = async (req, res) => {
  const url = req.params.shortUrl;
  const short = await Data.findOne({ shortUrl: url });
  if (short) {
    res.redirect(short.longUrl);
  }
};

module.exports = { shortUrl, customUrl, redirectUrl };

