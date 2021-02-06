import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useBids, usePostBid } from "../../api";
import { StyledBidItem, StyledBidsList } from "./AdItem.style";

export default function AdItemBids({ isVisible, adId, startBid }) {
  const { data: bidData, status: bidStatus } = useBids({ id: adId });
  const [
    postBid,
    { status: postBidStatus, error: postBidError },
  ] = usePostBid();

  const [bidAmount, setBidAmount] = useState(startBid);

  useEffect(() => {
    if (bidData && bidData.length > 0) {
      setBidAmount(bidData[bidData.length - 1].amount);
    }
  }, [bidData]);

  if (bidStatus === "loading") {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color="#fff" />
      </Box>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <StyledBidsList
          initial={{ flex: 0 }}
          animate={{ flex: 2 }}
          exit={{ flex: 0 }}
        >
          <Box overflow="auto" height="100%" pb={10}>
            {bidData && bidData.length === 0 && (
              <Typography>No bids at the moment!</Typography>
            )}
            {bidData &&
              bidData.map(({ firstName, lastName, amount, date }, index) => (
                <StyledBidItem key={index}>
                  <Typography color="#fff">{`${firstName} ${lastName}`}</Typography>
                  <Box textAlign="right">
                    <Typography color="#fff">${amount}</Typography>
                    <Typography color="#f1f1f1">
                      {moment(date).fromNow()}
                    </Typography>
                  </Box>
                </StyledBidItem>
              ))}
          </Box>
          <Box>
            {postBidError?.response?.data?.message && (
              <Typography color="error">
                {postBidError?.response?.data?.message}
              </Typography>
            )}
            <Box
              px={2}
              style={{
                width: "90%",
                background: "#fff",
                borderRadius: "20px",
                display: "flex",
                position: "absolute",
                left: "5%",
                bottom: "10px",
              }}
            >
              <TextField
                placeholder="Your bid"
                type="number"
                value={`${bidAmount}`}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <Button
                onClick={() => {
                  postBid({ amount: bidAmount, adId: adId });
                }}
              >
                {postBidStatus === "loading" ? (
                  <CircularProgress />
                ) : (
                  <Typography>BID</Typography>
                )}
              </Button>
            </Box>
          </Box>
        </StyledBidsList>
      )}
    </AnimatePresence>
  );
}
