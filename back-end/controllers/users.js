import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { sequelize } from "../../models";
import { Users } from "../../models";

let clients = [];

export function sendConnectionEvents(clientKey, error) {
  clients.forEach((client) => {
    if (client.id === clientKey) {
      console.log("client", client.response);
      if (error) {
        client.response.write(`error: ${error}\n\n`);
      } else {
        client.response.write(`data: Connected complete!\n\n`);
      }
      client.response.end();
    }
  });
}

const UsersController = {
  register: async (req, res) => {},
  login: async (req, res) => {
    try {
      return res.status(StatusCodes.OK).json({status: "Login successfully!"});
    } catch (err) {
      console.log(err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },
  logout: async (req, res) => {},
  getUserByID: async (req, res) => {
    try {
        const userId = req.param("id");
        const getUser = await Users.findAll({
            where: {
              userID: userId,
            },
          });
        res.status(StatusCodes.OK).json(getUser);
    } catch (err) {
        console.log(err);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  }
};

export default UsersController;