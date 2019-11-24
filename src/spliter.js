module.exports = {

  async index(req, res) {
    const { zones } = req.body;

    newZones = zones.split(',0').map(zone => zone).forEach(logArrayElements);

    function logArrayElements(newZones) {
      console.log(
        "{ longitude:" 
        + newZones[0] 
        + newZones[1] 
        + newZones[2] 
        + newZones[3] 
        + newZones[4] 
        + newZones[5] 
        + newZones[6] 
        + newZones[7] 
        + newZones[8] 
        + newZones[9] 
        + newZones[10] 
        + newZones[11] 
        + newZones[12] 
        + newZones[13] 
        + newZones[14] 
        + newZones[15] 
        + " latitude: "
        + newZones[16]
        + newZones[17]
        + newZones[18]
        + newZones[19]
        + newZones[20]
        + newZones[21]
        + newZones[22]
        + newZones[23]
        + newZones[24]
        + newZones[25]
        + newZones[26]
        + newZones[27]
        + newZones[28]
        + newZones[29]
        + " },"
        );
    }

    return res.json({ ok: true });
  }
};

