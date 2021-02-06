import { Box, Button, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import {
  StyledCardImage,
  StyledCardItem,
  StyledNoImage,
  StyledWrapper,
} from "./AdItem.style";
import AdItemBids from "./AdItemBids";

export default function AdItem({
  id,
  title,
  description,
  startBid,
  images,
  lastBid,
  endDate,
  bids,
}) {
  const [bidsOpen, setBidsOpen] = useState(false);

  return (
    <StyledWrapper>
      <StyledCardItem>
        {images.length > 0 ? (
          <StyledCardImage src={images[0]} />
        ) : (
          <Box
            mb={2}
            width="100%"
            height="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <StyledNoImage />
            <Typography variant="h6" color="primary">
              No images
            </Typography>
          </Box>
        )}
        <Typography color="primary" variant="h5">
          {title}
        </Typography>
        <Typography variant="h6">{description}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography>Start bid: ${startBid}</Typography>
            <Typography>Last bid: ${lastBid}</Typography>
            <Typography>Ends {moment(endDate).fromNow()}</Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setBidsOpen(!bidsOpen)}
          >
            <Typography color="primary">see bids ({bids})</Typography>
          </Button>
        </Box>
      </StyledCardItem>
      {bidsOpen && (
        <AdItemBids isVisible={bidsOpen} adId={id} startBid={startBid} />
      )}
    </StyledWrapper>
  );
}
