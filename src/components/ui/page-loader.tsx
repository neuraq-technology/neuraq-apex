"use client";

import { useEffect, useState } from "react";
import { VaporizeLoader } from "./vapour-text-effect";

export function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return <VaporizeLoader />;
}
