import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useAds } from "../../api";
import { AdItem, CreateAd } from "../../_common";
import { StyledWrapper } from "./AdsPage.style";

export default function AdsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: adsData, status: adsStatus } = useAds();

  const isLoading = adsStatus === "loading";

  if (isLoading) {
    return (
      <Box
        height="400px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <StyledWrapper>
      <CreateAd isVisible={modalOpen} onClose={() => setModalOpen(false)} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Active ads ({adsData?.length || 0})</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setModalOpen(true)}
        >
          <Typography color="primary">+ Add</Typography>
        </Button>
      </Box>
      <AnimatePresence>
        {adsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AdItem key={index} {...item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </StyledWrapper>
  );
}
