import { useState, useEffect } from "react";
import { getDesigners } from "../utils/services/dashboard/DesignerService";

export const useDesigners = () => {
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const data = await getDesigners();
        setDesigners(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDesigners();
  }, []);

  return { designers, loading, error };
};
