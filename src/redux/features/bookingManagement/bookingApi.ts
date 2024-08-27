import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserBookings: builder.query({
      query: () => ({
        url: `/bookings/user`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),

    getBookingById: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    addBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),

    checkAvailability: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/check-availability`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
  }),
});

export default bookingApi;
