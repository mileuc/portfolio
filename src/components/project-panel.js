import React from "react";
import * as projectPanelStyles from "./project-panel.module.scss";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const ProjectPanel = (props) => {
  
    return (
      <Card className={projectPanelStyles.panel}>
        <CardActionArea>
          <CardMedia
            className={projectPanelStyles.media}
            image={props.image.file.url}
            title={props.image.title}
          />
          <CardContent className={projectPanelStyles.content}>
            <Typography className={projectPanelStyles.panelTitle} gutterBottom variant="h6" component="h2">
              {props.name}
            </Typography>
            <Typography className={projectPanelStyles.panelDescription}variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
            <Typography className={projectPanelStyles.topics} gutterBottom>
                  {props.topics.map((topic) => {
                    return (
                      <div className={projectPanelStyles.topic}>{topic}</div>
                    )
                  })}
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  export default ProjectPanel;