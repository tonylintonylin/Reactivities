import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityStore from "../../../app/stores/ActivityStore";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  setEditMode,
  setSelectedActivity,
}) => {
  const activityStore = useContext(ActivityStore);
  const { selectedActivity: activity } = activityStore;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.description}</span>
        </Card.Meta>
        <Card.Description>{activity!.date}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => setSelectedActivity(null)}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
