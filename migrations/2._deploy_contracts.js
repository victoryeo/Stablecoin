var Stablecoin = artifacts.require("Stablecoin");

module.exports = function(deployer) {
    deployer.deploy(Stablecoin);

};
