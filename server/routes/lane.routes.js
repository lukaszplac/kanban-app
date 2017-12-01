import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';
import noteRouter from './note.routes';

const router = new Router();
router.use('/lanes/:laneId/', noteRouter); //jak to działa ?
//finalna sciezka po uzyciu middleware noteRouter oraz po zmergowaniu parametrow bedzie wygladac
//tak: /lanes/:laneId/notes ???????????????????

//Get all lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Edit line title
router.route('/lanes/:laneId/new').put(LaneController.editLaneTitle);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

export default router;
